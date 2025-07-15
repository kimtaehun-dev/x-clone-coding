"use client";

import Main from "@/components/beforeLogin/main/main";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
/* useEffect를 안쓰면 Next가 페이지를 반복적으로 전달하려고 발악을 함 왜그런지 정리필요 */
export default function Login() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/i/flow/login');
  }, [router]);
  return (
    <Main/>
  );
}