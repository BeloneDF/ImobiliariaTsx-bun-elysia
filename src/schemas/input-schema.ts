import { z } from "zod";

export const InputSchema = z.object({
  placeholder: z.string().optional(),
  value: z.string(),
  onChange: z.function(),
  type: z.string(),
  name: z.string().optional(),
  id: z.string(),
  className: z.string().optional(),
  style: z
    .object({
      width: z.string().optional(),
      height: z.string().optional(),
    })
    .optional(),
  required: z.boolean().optional(),
  label: z.string(),
});

export const SelectSchema = z.object({
  value: z.string(),
  name: z.string().optional(),
  id: z.string(),
  className: z.string().optional(),
  style: z
    .object({
      width: z.string().optional(),
      height: z.string().optional(),
    })
    .optional(),
  required: z.boolean().optional(),
  onChange: z.function(),
  label: z.string(),
});
