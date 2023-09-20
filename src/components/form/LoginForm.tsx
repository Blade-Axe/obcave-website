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
      <Button className="w-full mt-6" type="submit">
        Log in
      </Button>
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