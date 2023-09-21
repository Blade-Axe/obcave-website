"use client"

import { useForm } from "react-hook-form"
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "../ui/form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import oblogo from "public/ob-logo.png"
import Image from "next/image"

const FormSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid Email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be longer than 8 characters')
  })

const LoginForm = () => {

    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
    })


  const onSubmit = (values:z.infer<typeof FormSchema>) =>{
    console.log(values)
  }

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
      <div className="space-y-2 select-none">
      <div className="flex justify-center">
          <Image
                src={oblogo} 
                width={50} 
                height={50}
                alt="ob-logo"
                />
        </div>
        <p className="text-center font-bold text-2xl">Log in</p>
        <p className="text-center pb-3">Use your ob Account</p>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="example@obcave.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="Enter your password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      </div>
      <div className="flex justify-center">
        <Button className="w-2/3 mt-6" type="submit">
          Enter
        </Button>
      </div>
      <p className='text-center text-sm text-gray-600 mt-2 pt-2'>
        <Link className='text-blue-500 hover:underline' href='/signup'>
          Create an account
        </Link>
      </p>
    </form>
  </Form>
  )
}

export default LoginForm