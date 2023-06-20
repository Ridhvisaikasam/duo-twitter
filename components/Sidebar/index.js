import Item from "./Item";
import { RiHome7Fill } from "react-icons/ri";
import { BiHash } from "react-icons/bi";
import { AiOutlineBell } from "react-icons/ai";
import { Flex, Box, Button } from "@chakra-ui/react";
import { BsTwitter } from "react-icons/bs";
import { FaUser } from 'react-icons/fa'
import {useRouter} from "next/router";
import realmApp from "../../lib/realm"; 
const Sidebar = () => {

  const router = useRouter();

  const redirectToProfile = () => {
    router.push('/pavan')
  }

  const redirectToHome = () => {
    router.push('/')
  }

  const logoutfun=()=>{
      realmApp.currentUser.logOut();
      router.push('/')
  }

  return (
    <>
      <Flex flexDirection={"column"} gap={".6rem"}>
        <Box fontSize={"30px"} padding={"1rem"}>
          <BsTwitter />
        </Box>
        {realmApp.currentUser&&<Item Icon={RiHome7Fill} text={"Home"} clickHandler={redirectToHome}/>}
       { /*<Item Icon={BiHash} text={"Explore"} />
        <Item Icon={AiOutlineBell} text={"Notifications"} />*/}
        {realmApp.currentUser&&<Item Icon={FaUser} text={"Profile"} clickHandler={redirectToProfile} />}
        {realmApp.currentUser&&<Item Icon={FaUser} text={"Logout"} clickHandler={logoutfun} />}
        {realmApp.currentUser&&<Button my={"1rem"} colorScheme={"twitter"} rounded="full">
          Tweet
        </Button>}
      </Flex>
    </>
  );
};

export default Sidebar;
