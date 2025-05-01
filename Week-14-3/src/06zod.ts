import z from 'zod';

const StringZodSchema = z.string();
type StringZodType = z.infer<typeof StringZodSchema>;