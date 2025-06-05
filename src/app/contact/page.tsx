import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
          
          <div className="prose dark:prose-invert max-w-none mb-12">
            <p className="text-lg">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </div>
  )
}