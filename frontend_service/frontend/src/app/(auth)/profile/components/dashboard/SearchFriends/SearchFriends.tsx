import React from 'react'
import Image from 'next/image'
import { useState, ChangeEvent, useRef, useEffect } from 'react';
import { Friend, friendsData} from '../../../../chat/page';
import searchBarInAddChannel from "../../../../public/iconSearchInAddChannel.png";
// import { Friend, friendsData} from '../../../../app/(notRoot)/chat/page';
// import searchBarInAddChannel from "../../../../public/iconSearchInAddChannel.png";
import styled from 'styled-components';
import { Backend_URL } from '@/lib/Constants';
import SearchHeader from '../Header/SearchHeader';
import ResultItem from '../Header/ResultItem';

const SearchContainer = styled.div`
  position: relative;
  top: 2vh;
  // margin: 0 auto;
  width: 100%;
  height: 5vh;
  display: flex;
  // margin-left: auto;
  justify-content: center;
    align-items: center;
`;


interface FriendListProps {
  // setFriendSearch: React.Dispatch<React.SetStateAction<Friend[]>>;
  addChannelSearch: boolean;
  setAddChannelSearch: React.Dispatch<React.SetStateAction<boolean>>;
  setChannelFriendSearch: React.Dispatch<React.SetStateAction<Friend[]>>;
  setFriendSearch: React.Dispatch<React.SetStateAction<SearchU[]>>;
}

interface SearchU
{
    id: number;
    username: string;
    profilePic: string;
    isBlocked: boolean;
    group: boolean;
    groupMembers?: string[];
}


const SearchFriends = ({addChannelSearch, setAddChannelSearch,setChannelFriendSearch , setFriendSearch}: FriendListProps) => {

  // const SearchBar = useRef<HTMLDivElement>(null);
  const SearchIcon = useRef<HTMLDivElement>(null);
  const [searchText, setSearchText] = useState<string>('');
  const [SearchUsers, setSearchUsers] = useState<SearchU[]>([]);


  const Searchusers = async (username: string) => {
    try {
      const res = await fetch( Backend_URL+"user/"+username, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      if (res.ok) {
        const data = await res.json() as SearchU[];
        setFriendSearch(data);
      }
    } catch (error) {
      console.error("Err1or fetching data: ", error);
    }
  };


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
   let username : string = e.target.value;
    username = username.trim();
    if (username)
      Searchusers('search/'+username);
    else
      Searchusers('all');
    setSearchText(e.target.value);
  };

return ( 
       <SearchContainer>
          <input type="text" className="seachBarAddChanneloumad flex " 
         value={searchText}
         onChange={handleInputChange}
         />

        </SearchContainer>
)
}

export default SearchFriends;