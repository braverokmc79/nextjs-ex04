import { NextResponse } from "next/server";

export function middleware(request, response){
    console.log("middleware :", request);
    //console.log("middleware response :", response);
    return  NextResponse.next();
}

export const config={
    matcher:'/news'
}