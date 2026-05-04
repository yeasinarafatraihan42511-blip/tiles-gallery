// "use client";
// import { authClient } from "@/lib/auth-client";
// import { Check } from "@gravity-ui/icons";
// import {
//   Button,
//   Card,
//   Description,
//   FieldError,
//   Form,
//   Input,
//   Label,
//   TextField,
// } from "@heroui/react";

// export default function LoginPage() {
//   const onSubmit = async (e) => {
//     e.preventDefault();
   
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     console.log({  email, password });

//     const {data, error} = await authClient.signIn.email({
        
//         email,
//         password,
//         callbackURL: '/'
//     })
//     console.log({data, error})
//   };
//   const onGoogleSignIn = async () => {
//     await authClient.signIn.social({
//       provider: 'google',
//     })
//   }

//   return (
//     <Card className="border mx-auto w-125 py-10 mt-5">
//       <h1 className="text-center text-2xl font-bold">Login</h1>

//       <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
     

     

//         <TextField
//           isRequired
//           name="email"
//           type="email"
//           validate={(value) => {
//             if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
//               return "Please enter a valid email address";
//             }

//             return null;
//           }}
//         >
//           <Label>Email</Label>
//           <Input placeholder="john@example.com" />
//           <FieldError />
//         </TextField>

//         <TextField
//           isRequired
//           minLength={8}
//           name="password"
//           type="password"
//           validate={(value) => {
//             if (value.length < 8) {
//               return "Password must be at least 8 characters";
//             }
//             if (!/[A-Z]/.test(value)) {
//               return "Password must contain at least one uppercase letter";
//             }
//             if (!/[0-9]/.test(value)) {
//               return "Password must contain at least one number";
//             }

//             return null;
//           }}
//         >
//           <Label>Password</Label>
//           <Input placeholder="Enter your password" />
//           <Description>
//             Must be at least 8 characters with 1 uppercase and 1 number
//           </Description>
//           <FieldError />
//         </TextField>

//         <div className="flex gap-2">
//           <Button type="sign-in" variant="primary">
//             <Check />
//             Login
//           </Button>
//           <Button type="reset" variant="secondary ">
//             Reset
//           </Button>
//         </div>
//       </Form>
//       <p className="text-center">Or</p>
//       <div className="px-10 flex justify-center">
//         <Button onClick={onGoogleSignIn} variant="outline" className={'W-full'} >
//         Sign in with Google
//       </Button>
//       </div>
//     </Card>
//   );
// }
"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import {
  Button,
  Card,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

export default function LoginPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const { error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      toast.error("Invalid email or password");
    } else {
      toast.success("Login successful");
      form.reset(); 
      router.push("/");
    }
  };

  const onGoogleSignIn = async () => {
    await authClient.signIn.social({ provider: "google" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50">
      <Card className="w-[380px] p-8 shadow-lg rounded-xl">

        <h1 className="text-2xl font-bold text-center mb-6">
          Login to TileGallery
        </h1>

        <Form autoComplete="off" className="flex flex-col gap-4" onSubmit={onSubmit}>
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
          </TextField>

          <TextField isRequired name="password" type="password">
            <Label>Password</Label>
            <Input placeholder="Enter password" />
          </TextField>

          <Button type="submit" className="bg-blue-600 text-white">
            Login
          </Button>
        </Form>

        {/* Divider */}
        <div className="text-center my-4 text-gray-400 text-sm">OR</div>

        <Button
          onClick={onGoogleSignIn}
          variant="bordered"
          className="w-full btn bg-amber-600 text-white hover:bg-amber-700" 
        >
          Continue with Google
        </Button>

        {/* Link */}
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link href="/register" className="font-medium underline">
            Register
          </Link>
        </p>
      </Card>
    </div>
  );
}