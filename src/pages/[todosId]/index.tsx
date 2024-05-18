import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link"; 
import { Todo } from "@/types";

const inter = Inter({ subsets: ["latin"] });

const items =["Home","About","Conact us","Anar"]

export default function Home({todosData, ourParams}: any) {
  const router = useRouter();
  const [flag,setFlag] =useState<boolean>(false)
  const [list,setList] = useState<Todo[]>();



  const handleAnar = ()=>{
    setFlag((prev)=>!prev)
    router.push("/about")
  }

  const fetchData = async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setList(data)
  }

  useEffect(()=>{
    fetchData(); 
    console.log(ourParams)
  },[])

  return (
    <div style={{backgroundColor:"white"}}>
      <Header items={list}/>
        <button onClick={handleAnar}>
        Click  
        </button> 
      <p>{flag ? "Fuck":"Anarcik"}</p>
    </div>
  );
}

// export const getServerSideProps = async (context: any) => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data = await response.json();
  
//     const {params} = context
//     return {
//       props: {
//       todosData: data,
//       ourParams: params
//     }}
//   }

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                todosId: 'anar'}
            },
            {
                params: {
                todosId: '2'}
            },
            {
                params: {
                todosId: '3'}
            },
            
        ], fallback: 'blocking'
    }
}

export const getStaticProps = async ({context}: any) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  return {
    props: {
    todosData: data,
  }}
}