import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Orders } from "./order"
import { OrderHeader } from "./orderHeader"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
export default function Home () {
    return(
        <div>
        <div className="flex justify-end p-5">
        <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      </div>
      <div className="">
      <OrderHeader />
      <Orders />
      </div>
      
      <Pagination className="grid justify-end py-24  ">
  <PaginationContent>

    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>

    <PaginationItem>
      <PaginationLink href="#" isActive >1</PaginationLink>
    </PaginationItem>

    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>

    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>

    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>

    <PaginationItem>
      <PaginationLink href="#">10</PaginationLink>
    </PaginationItem>

    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>

  </PaginationContent>
</Pagination>
      </div>
    )
}