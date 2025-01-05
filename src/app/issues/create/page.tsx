"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "../../components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { Separator } from "../../components/ui/seperator"

const formSchema = z.object({
  issueType: z.enum(["new", "existing"]),
  repoUrl: z.string().url("Please enter a valid repository URL"),
  issueTitle: z.string().min(1, "Please enter an issue title").optional(),
  issueDescription: z.string().min(10, "Please enter a detailed description").optional(),
  existingIssueUrl: z.string().url("Please enter a valid issue URL").optional(),
  bountyAmount: z.string().min(1, "Please enter a bounty amount"),
  deadline: z.string().min(1, "Please select a deadline"),
  requirements: z.string().min(10, "Please enter detailed requirements"),
  fundingType: z.enum(["individual", "organization", "dao"]),
})

export default function CreateBountyPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      issueType: "new",
      repoUrl: "",
      bountyAmount: "",
      deadline: "",
      requirements: "",
      fundingType: "individual",
    },
  })

  const issueType = form.watch("issueType")

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Here we would:
    // 1. Create GitHub issue if it's a new issue
    // 2. Create bounty in our database
    // 3. Initialize smart contract for fund allocation
    // 4. Link everything together
  }

  return (
    <div className="container max-w-3xl py-6 md:py-10">
      <Card className="backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Create Funded Issue</CardTitle>
          <CardDescription>
            Create a new funded issue or add funding to an existing GitHub issue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="issueType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Issue Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select issue type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="new">Create New Issue</SelectItem>
                        <SelectItem value="existing">Fund Existing Issue</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Choose whether to create a new issue or fund an existing one
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="repoUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Repository URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://github.com/org/repo" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter the URL of the GitHub repository
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {issueType === "new" ? (
                <>
                  <FormField
                    control={form.control}
                    name="issueTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Issue Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter issue title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="issueDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Issue Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe the issue in detail"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              ) : (
                <FormField
                  control={form.control}
                  name="existingIssueUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Existing Issue URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://github.com/org/repo/issues/1" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter the URL of the existing GitHub issue you want to fund
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <Separator />

              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="bountyAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bounty Amount (SOL)</FormLabel>
                      <FormControl>
                        <Input type="number" step="0.1" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter the amount you want to offer for this issue
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="deadline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Deadline</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormDescription>
                        Set a deadline for the issue completion
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="requirements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Requirements</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="List specific requirements, acceptance criteria, or additional context"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Specify any additional requirements or acceptance criteria
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fundingType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Funding Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select funding type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="individual">Individual</SelectItem>
                        <SelectItem value="organization">Organization</SelectItem>
                        <SelectItem value="dao">DAO</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Select the type of funding entity
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">Create Funded Issue</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

