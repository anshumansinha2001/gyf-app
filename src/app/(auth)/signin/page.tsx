"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { signIn } from "next-auth/react";
import { signInSchema } from "@/schemas/signInSchema";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

export default function SignInForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // zod validation
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const { toast } = useToast();
  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    setIsSubmitting(true);
    const result = await signIn("credentials", {
      redirect: false,
      identifier: data.identifier,
      password: data.password,
    });

    if (result?.error) {
      setIsSubmitting(false);
      toast({
        title: "Login Failed",
        description: result.error,
        variant: "destructive",
      });
    }

    if (result?.url) {
      router.replace("/dashboard");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="w-full max-w-md p-4 md:p-8 space-y-8 bg-white rounded-lg shadow-md mx-2">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            Welcome Back to GYF
          </h1>
          <p className="mb-4">Sign in to continue your secret conversations</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              name="identifier"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Identifier</FormLabel>
                  <Input placeholder="Your Email or Username" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    placeholder="Your Password"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                " Sign In"
              )}
            </Button>
          </form>
        </Form>
        <div className="text-center mt-4 space-y-4">
          <p>
            Not a member yet?{" "}
            <Link
              href="/signup"
              className="text-blue-600 hover:text-blue-800 font-bold"
            >
              Sign up
            </Link>
          </p>
          <p>
            Return to {""}
            <Link
              href="/"
              className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-md font-medium text-sm"
            >
              Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
