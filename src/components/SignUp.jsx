import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-white px-4">
      <Card className="max-w-md w-full rounded-3xl shadow-xl">
        <CardContent className="p-8 text-center">
          <h2 className="text-3xl font-bold text-amber-900">
            Join the Royal Waitlist
          </h2>

          <p className="mt-3 text-amber-700">
            Be the first to experience our premium chai blends.
          </p>

          <form className="mt-6 space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              required
              className="h-12 rounded-xl"
            />

            <Button className="w-full h-12 rounded-xl">Notify Me</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
