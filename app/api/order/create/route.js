import { products } from "@/assets/productData";
import connectDB from "@/config/db";
import User from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { use } from "react";


export async function POST(request) {
    try {
        const {userId}=getAuth(request)
        const {address,items}=await request.json()
       if(!address || items.length===0){
        return NextResponse.json({success:false,message:'Invalid data'})
       }
       const amount=await items.reduce(async(acc,item)=>{
        const product=await Product.findById((item.product))
        return await acc+product.offerPrice*item.quantity
       },0)
       await inngest.send({
        name:'order/created',
        data:{
            userId,
            address,
            items,
            amount:amount+Math.floor(amount*.02),
            data:Date.now()
        }
       })
       //clear user cart
       const user=await User.findById(userId)
       user.cartItems={}
       await user.save()
       return NextResponse.json({success:true,message:'Order Placed'})
    } catch (error) {
        console.error(error)
        return NextResponse.json({success:false,message:error.message})
    }
}