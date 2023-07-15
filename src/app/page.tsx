import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Home() {
  return (
   <div className='grid min-h-screen place-items-center bg-zinc-300'>
      <Card className='w-1/3 h-[700px] grid grid-rows-[min-content_1fr_min-content]'>
        <CardHeader>
          <CardTitle>ChatBot</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent className='space-y-3'>
          <div className='flex gap-2 items-center font-medium text-sm'>
            <Avatar className='shadow-lg'>
              <AvatarFallback>GB</AvatarFallback>
              <AvatarImage src='https://github.com/barrosgusta.png'/>
            </Avatar>
            <p className='rounded-xl bg-zinc-300 p-4 shadow-lg' >Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elitconsectetur adipisicing elitconsectetur adipisicing elitconsectetur adipisicing elitconsectetur adipisicing elit?</p>
          </div>

          <div className='flex gap-2 flex-row-reverse items-center text-sm'>
             <Avatar>
              <AvatarFallback>GB</AvatarFallback>
              <AvatarImage src='https://github.com/openai.png'/>
            </Avatar>
            <p className='rounded-xl bg-indigo-300 p-4 shadow-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum fuga explicabo veritatis itaque quia? Iure inventore odio eaque porro cumque iste laborum beatae assumenda praesentium, saepe ipsa, aspernatur non doloremque!</p>
          </div>
        </CardContent>
        <CardFooter className='space-x-1'>
          <Input placeholder='Digite sua mensagem' />
          <Button type='submit'>Enviar</Button>
        </CardFooter>
      </Card>
   </div>
  )
}
