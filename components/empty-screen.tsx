import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'What is beetroot?',
    message: 'What is beetroot?'
  },
  {
    heading: 'What color is beetroot?',
    message: 'What color is beetroot?'
  },
  {
    heading: 'What sizes can beets reach?',
    message: 'What sizes can beets reach?'
  },
  {
    heading: 'How much does an average beet weigh?',
    message: 'How much does an average beet weigh?'
  },
]
export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          {/* Welcome to Nimbl AI Chatbot! */}
          Welcome to Beetroot Bot!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          {/* This is an open source AI chatbot app template built with{' '}
          <ExternalLink href="https://nextjs.org">Next.js</ExternalLink> and{' '}
          <ExternalLink href="https://vercel.com/storage/kv">
            Vercel KV
          </ExternalLink>
          . */}
          {/* This is a knowledge-based chatbot that can answer questions about your company. */}
          I'm your pocket beetroot bot to help you learn more about beetroot
        </p>
        <p className="leading-normal text-muted-foreground">
          {/* You can start a conversation here or try the following examples: */}
          You could start chat with me or you pre-prompt messages
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
