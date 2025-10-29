import { Button } from "@/components/ui/button";
import {
  FieldGroup,
  FieldSet,
  FieldLegend,
  FieldDescription,
  Field,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function AddProjectPage() {
  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <div>
        <h1 className="text-2xl tracking-tight">Project Information</h1>
      </div>
      <FieldSeparator className="my-2" />
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="title">Project title</FieldLabel>
                <Input id="title" placeholder="project-alpha" required />
              </Field>
              <FieldSet>
                <FieldLegend>Start date</FieldLegend>
                <FieldGroup className="grid grid-cols-4 gap-4 p-0 m-0">
                  <Field>
                    <Select defaultValue="">
                      <SelectTrigger id="startDate-month">
                        <SelectValue placeholder="MM" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="01">01</SelectItem>
                        <SelectItem value="02">02</SelectItem>
                        <SelectItem value="03">03</SelectItem>
                        <SelectItem value="04">04</SelectItem>
                        <SelectItem value="05">05</SelectItem>
                        <SelectItem value="06">06</SelectItem>
                        <SelectItem value="07">07</SelectItem>
                        <SelectItem value="08">08</SelectItem>
                        <SelectItem value="09">09</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="11">11</SelectItem>
                        <SelectItem value="12">12</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <Select defaultValue="">
                      <SelectTrigger id="startDate-year">
                        <SelectValue placeholder="YYYY" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                        <SelectItem value="2026">2026</SelectItem>
                        <SelectItem value="2027">2027</SelectItem>
                        <SelectItem value="2028">2028</SelectItem>
                        <SelectItem value="2029">2029</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="short-description">
                  Short description
                </FieldLabel>
                <Textarea
                  id="short-description"
                  placeholder="A brief description of the project"
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit">Submit</Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
