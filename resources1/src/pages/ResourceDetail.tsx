import { useParams, Link } from "react-router-dom";
import { resources } from "@/data/resources";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ResourceDetail = () => {
  const { id } = useParams();
  const resource = resources.find((r) => r.id === id);

  if (!resource) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Resource not found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-background border-b">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-card rounded-full shadow-sm">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-foreground">InternGuide Resource</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {resource.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {resource.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <article className="bg-card rounded-xl border shadow-lg overflow-hidden">
            <div className="p-6 md:p-12">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => (
                      <h1 className="text-4xl font-bold mt-8 mb-6 text-foreground border-b pb-4">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-3xl font-semibold mt-10 mb-4 text-foreground flex items-center gap-2">
                        <ArrowRight className="w-6 h-6 text-primary" />
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-2xl font-semibold mt-8 mb-3 text-foreground">
                        {children}
                      </h3>
                    ),
                    h4: ({ children }) => (
                      <h4 className="text-xl font-semibold mt-6 mb-2 text-primary">
                        {children}
                      </h4>
                    ),
                    p: ({ children }) => (
                      <p className="text-base leading-relaxed mb-4 text-muted-foreground">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="space-y-2 mb-6 ml-6">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="space-y-2 mb-6 ml-6 list-decimal">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="flex-1">{children}</span>
                      </li>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold text-foreground">
                        {children}
                      </strong>
                    ),
                    em: ({ children }) => (
                      <em className="italic text-accent">
                        {children}
                      </em>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-primary pl-4 py-2 my-6 bg-accent/10 rounded-r-lg">
                        {children}
                      </blockquote>
                    ),
                    code: ({ children }) => (
                      <code className="bg-secondary px-2 py-1 rounded text-sm font-mono text-foreground">
                        {children}
                      </code>
                    ),
                    pre: ({ children }) => (
                      <pre className="bg-secondary p-4 rounded-lg overflow-x-auto mb-6 border">
                        {children}
                      </pre>
                    ),
                    hr: () => (
                      <hr className="my-8 border-border" />
                    ),
                  }}
                >
                  {resource.content}
                </ReactMarkdown>
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card/50 mt-20">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            Have a resource to suggest?{" "}
            <a href="mailto:feedback@internguide.com" className="text-primary hover:underline font-medium">
              Let us know
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ResourceDetail;
