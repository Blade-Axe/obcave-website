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
import oblogov1 from "public/ob-logo-v1.png"

const FormSchema = z.object({
    username: z.string().min(1, "Username is required").min(3, "Must be longer than 3 characters").max(28).toLowerCase().trim().transform(value => value.replaceAll(" ", "")),
    email: z.string().min(1, 'Email is required').email('Invalid email address'),
    password: z
        .string()
        .min(1, 'Password is required')
        .min(8, 'Password must be longer than 8 characters'),
    confirmPassword: z
    .string()
    .min(1, 'Password is required')
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Passwords do not match"
  })

const SignUpForm = () => {

    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues:{
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      }
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
                src={oblogov1} 
                width={50} 
                height={50}
                alt="ob-logo"
                />
        </div>
        <p className="text-center font-bold text-2xl">Create an ob Account</p>
        <p className="text-center pb-3">Enter your details</p>
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input type="username" placeholder="johncave" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
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
      <FormField
        control={form.control}
        name="confirmPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Confirm Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="Re-Enter your password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      </div>
      <div className="flex justify-center">
        <Button className="w-2/3 mt-6" type="submit">
          Create account
        </Button>
      </div>
      <p className='text-center text-sm text-gray-600 mt-2 pt-2'>
      Already have an account? &nbsp;
        <Link className='text-blue-500 hover:underline' href='/login'>
          Log in
        </Link>
      </p>
    </form>
  </Form>
  )
}

export default SignUpForm