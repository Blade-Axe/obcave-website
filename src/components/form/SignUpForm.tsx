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
    username: z.string().min(1, "Username is required").min(3, "Must be longer than 3 characters").max(28),
    email: z.string().min(1, 'Email is required').email('Invalid Email'),
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
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input type="username" placeholder="BladeAxe" {...field} />
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
      <Button className="w-full mt-6" type="submit">
        Create account
      </Button>
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