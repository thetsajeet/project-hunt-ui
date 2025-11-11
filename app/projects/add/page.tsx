"use client";

import { Button } from "@/components/ui/button";
import {
  FieldGroup,
  FieldSet,
  FieldLegend,
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
import { useForm } from "react-hook-form";
import { MinusIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect } from "react";

type ProjectInputs = {
  title: string;
  startDate: {
    month: number;
    year: number;
  };
  hasEndDate: boolean;
  endDate: {
    month: number;
    year: number;
  } | null;
  shortDescription: string;
  images: FileList;
};

export default function AddProjectPage() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    resetField,
    formState: { errors },
  } = useForm<ProjectInputs>({
    defaultValues: {
      hasEndDate: true,
    },
  });
  const onSubmit = (data: ProjectInputs) => {
    if (!data.hasEndDate) {
      data.endDate = null;
    }
    console.log(data);
  };
  const files = watch("images") as FileList | undefined;
  const previews = files
    ? Array.from(files).map((f) => ({
        name: f.name,
        url: URL.createObjectURL(f),
      }))
    : [];
  const removeFile = (index: number) => {
    const existing = watch("images") as FileList | undefined;
    if (!existing) return;

    // build a new FileList using DataTransfer
    const dt = new DataTransfer();
    Array.from(existing)
      .filter((_, i) => i !== index)
      .forEach((f) => dt.items.add(f));

    // update react-hook-form value
    setValue("images", dt.files);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <div>
        <h1 className="text-2xl tracking-tight">Project Information</h1>
      </div>
      <FieldSeparator className="my-2" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="title">Project title</FieldLabel>
                <Input
                  {...register("title", { required: true })}
                  id="title"
                  placeholder="project-alpha"
                  required
                />
              </Field>
              <FieldSet>
                <FieldLegend>Start date</FieldLegend>
                <FieldGroup className="grid grid-cols-4 gap-4 p-0 m-0">
                  <Field>
                    <Select
                      {...(register("startDate.month"), { required: true })}
                      onValueChange={(val: string) => {
                        const valNumber = parseInt(val);
                        if (valNumber < 1 || valNumber > 12) return;
                        setValue("startDate.month", valNumber);
                      }}
                    >
                      <SelectTrigger id="startDate-month">
                        <SelectValue placeholder="MM" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">01</SelectItem>
                        <SelectItem value="2">02</SelectItem>
                        <SelectItem value="3">03</SelectItem>
                        <SelectItem value="4">04</SelectItem>
                        <SelectItem value="5">05</SelectItem>
                        <SelectItem value="6">06</SelectItem>
                        <SelectItem value="7">07</SelectItem>
                        <SelectItem value="8">08</SelectItem>
                        <SelectItem value="9">09</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="11">11</SelectItem>
                        <SelectItem value="12">12</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <Select
                      {...(register("startDate.year"), { required: true })}
                      onValueChange={(val: string) => {
                        const valNumber = parseInt(val);
                        if (isNaN(valNumber)) return;
                        setValue("startDate.year", valNumber);
                      }}
                    >
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
              <Field orientation="horizontal">
                <Checkbox
                  onCheckedChange={(isChecked: boolean) => {
                    setValue("hasEndDate", !isChecked);
                  }}
                />
                <FieldLabel
                  htmlFor="finder-pref-9k2-hard-disks-ljj"
                  className="font-normal"
                >
                  Is this project ongoing?
                </FieldLabel>
              </Field>
              <FieldSet>
                <FieldLegend>End date</FieldLegend>
                <FieldGroup className="grid grid-cols-4 gap-4 p-0 m-0">
                  <Field>
                    <Select
                      disabled={!watch("hasEndDate")}
                      {...(register("endDate.month"),
                      { required: watch("hasEndDate") })}
                      onValueChange={(val: string) => {
                        const valNumber = parseInt(val);
                        if (valNumber < 1 || valNumber > 12) return;
                        setValue("endDate.month", valNumber);
                      }}
                    >
                      <SelectTrigger id="startDate-month">
                        <SelectValue placeholder="MM" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">01</SelectItem>
                        <SelectItem value="2">02</SelectItem>
                        <SelectItem value="3">03</SelectItem>
                        <SelectItem value="4">04</SelectItem>
                        <SelectItem value="5">05</SelectItem>
                        <SelectItem value="6">06</SelectItem>
                        <SelectItem value="7">07</SelectItem>
                        <SelectItem value="8">08</SelectItem>
                        <SelectItem value="9">09</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="11">11</SelectItem>
                        <SelectItem value="12">12</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <Select
                      disabled={!watch("hasEndDate")}
                      {...(register("endDate.year"),
                      { required: watch("hasEndDate") })}
                      onValueChange={(val: string) => {
                        const valNumber = parseInt(val);
                        if (isNaN(valNumber)) return;
                        setValue("endDate.year", valNumber);
                      }}
                    >
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
                  {...register("shortDescription")}
                  id="short-description"
                  placeholder="A brief description of the project"
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <Field>
              <FieldLabel htmlFor="images">Project images</FieldLabel>
              <div className="relative">
                <Input
                  id="images"
                  type="file"
                  accept="image/*"
                  multiple
                  className="cursor-pointer absolute top-0 left-0 opacity-0 border-0 w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:text-sm file:cursor-pointer"
                  // requires `watch` and `setValue` from useForm()
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const newFiles = e.target.files;
                    if (!newFiles) return;
                    const existing = watch("images") as FileList | undefined;

                    // build a combined FileList using DataTransfer
                    const dt = new DataTransfer();
                    if (existing) {
                      Array.from(existing).forEach((f) => dt.items.add(f));
                    }
                    Array.from(newFiles).forEach((f) => dt.items.add(f));

                    // update react-hook-form value
                    setValue("images", dt.files);
                  }}
                />
                {/* Your custom button replaces "Choose files" */}
                <label htmlFor="images">
                  <Button
                    type="button"
                    variant="outline"
                    className="cursor-pointer w-full"
                  >
                    Upload images
                  </Button>
                </label>

                {/* Custom status text replaces "No file chosen" */}
                <p className="mt-1 text-xs text-muted-foreground">
                  {previews.length === 0
                    ? "No images selected"
                    : `${previews.length} images selected`}
                </p>
              </div>
            </Field>
            {previews.length > 0 && (
              <div className="mt-2 grid grid-cols-4 gap-2">
                {previews.map((p, fileIndex) => (
                  <div
                    key={p.url}
                    className="h-24 relative w-full rounded-md border bg-slate-50 flex items-center justify-center z-1 hover:opacity-50"
                  >
                    <span
                      className="absolute -right-1 -top-1 z-20 cursor-pointer"
                      onClick={() => removeFile(fileIndex)}
                    >
                      <MinusIcon className="size-4 bg-zinc-900 text-white rounded-full" />
                    </span>
                    <img
                      src={p.url}
                      alt={p.name}
                      className="h-full w-full object-cover"
                      onLoad={() => {
                        // release object URL once loaded to avoid memory leak
                        URL.revokeObjectURL(p.url);
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
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
