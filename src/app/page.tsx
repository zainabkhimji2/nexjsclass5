import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { log } from "console"
import { Menu } from "lucide-react"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react"


async function HomePage() {


 let res = await  fetch("https://simple-books-api.glitch.me/books")
 
 let data = await res.json()
 
 console.log(data)

let bookNames = data.map((dataN: any)=> <><h4>{dataN.name}</h4> <hr /> </>)

 
 
 


  return (
    
    <div>
      {bookNames}
      {/* {data[0].name}
      {data[1].name}
      {data[2].name}
      {data[3].name}
      {data[4].name}
      {data[5].name} */}

    </div>
//     <Sheet>
//   <SheetTrigger><Menu/></SheetTrigger>
//   <SheetContent>
//     <SheetHeader>
//       <SheetTitle>Are you absolutely sure?</SheetTitle>
//       <SheetDescription>
//         This action cannot be undone. This will permanently delete your account
//         and remove your data from our servers.
//       </SheetDescription>
//     </SheetHeader>
//   </SheetContent>
// </Sheet>

  )
}

export default HomePage