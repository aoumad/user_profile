
'use client'
import React, { useContext, useEffect, useState, createContext } from "react";
import Loading from "@/app/components/Loading";
import { Backend_URL } from "@/lib/Constants";
import Authorization from "@/utils/auth";
import { redirect, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Confirm from "./confirm/page";
import ConfirmAuth from "./confirmauth/page";


interface User {
  id: string;
  email: string;
  username: string;
  profilePic?: string;
  hash: string;
  typeLog: string;
  isTwoFactorEnabled: Boolean;
  isConfirmed2Fa: Boolean;
}

interface UserContextValue {
  user: User | null;
  setUser: (user: User | null) => void; 
}

const UserContext = createContext<UserContextValue>({
  user: null as User | null,
  setUser: (user: User | null) => {},
});

function RootLayout({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [twoFa, setTwoFa] = useState<boolean>(false)
  // const [check2fa, setCheck2fa] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const pathname = usePathname();  
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const res = await fetch(Backend_URL + "auth/check", {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          });
        if (res.ok) {
          const data = await res.json();
          setUser(data);
          setAuthenticated(true);
          if (data?.isTwoFactorEnabled  && !data.isConfirmed2Fa)
          {
              //router.push("/confirmauth");
              setTwoFa(true);
              return ; 
          }
          } else {
          
          router.push("/");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    checkAuthentication();
  }, [pathname]);

  const value = { user, setUser };

  return (
    <UserContext.Provider value={value}>
    {/* {authenticated ? (
      !user?.hash ? (
        <Confirm />
      ) : (
        <> 
          {children}
        </>
      )
    ) : (
      <Loading />
    )} */}
          <> 
            {children}
          </>
    </UserContext.Provider>
  );
}

export default RootLayout;

export function useUser() {
  const { user } = useContext(UserContext);
  return user;
}
