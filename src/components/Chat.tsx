'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { useChat } from 'ai/react'
import { ScrollArea } from "./ui/scroll-area";

export function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/chat',
        onError: (error) => {
            console.log(error)
        }
    })

    return (
        <Card className='w-1/3 grid grid-rows-[min-content_1fr_min-content] dark:bg-zinc-900 border-indigo-600'>
        <CardHeader>
          <CardTitle className="text-zinc-900 dark:text-zinc-100">ChatBot</CardTitle>
          <CardDescription className="text-zinc-600 dark:text-zinc-400">Ask anything</CardDescription>
        </CardHeader>
        <CardContent>
            <ScrollArea className="h-[600px] w-full space-y-3 pr-4 rounded-xl bg-zinc-200 dark:bg-zinc-800">
                {messages.map(message => {
                    return (
                            <div key={message.id}>
                                {message.role === 'user' && (
                                    <div className='flex gap-2 items-start font-medium text-sm m-5'>
                                        <Avatar className='shadow-lg border border-zinc-500'>
                                            <AvatarFallback>GB</AvatarFallback>
                                            <AvatarImage src='https://github.com/barrosgusta.png'/>
                                        </Avatar>
                                        <p className='rounded-xl bg-indigo-400 dark:bg-indigo-700 text-zinc-900 dark:text-zinc-300 p-4 shadow-lg'>{message.content}</p>
                                    </div>
                                )}
                                
                                {message.role === 'assistant' && (
                                    <div className='flex flex-row-reverse gap-2 items-start font-medium text-sm m-5'>
                                        <Avatar className='shadow-lg border border-zinc-500'>
                                            <AvatarFallback>AI</AvatarFallback>
                                            <AvatarImage src='https://github.com/openai.png'/>
                                        </Avatar>
                                        <p className='rounded-xl bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-300 p-4 shadow-lg'>{message.content}</p>
                                    </div>    
                                )}
                            </div>
                            )
                })}
            </ScrollArea>
            
        </CardContent>
        <CardFooter>
            <form className='flex w-full gap-2' onSubmit={handleSubmit}>
                <Input placeholder='Your message' value={input} onChange={handleInputChange} className="dark:bg-zinc-900 dark:border-zinc-600 dark:text-zinc-300" />
                <Button type='submit' className="bg-indigo-600">Send</Button>
            </form>
        </CardFooter>
      </Card>
    )
}