import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import Select from "./Select";
import { Contact, contactSchema, contactTypeOptions } from "../schemas/Contact";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  onSubmit: (contact: Contact) => void;
};

function ContactForm({ onSubmit }: Props) {
  const methods = useForm<Contact>({
    resolver: zodResolver(contactSchema),
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input name="name">Name</Input>
        <Input name="lastname">Last name</Input>
        <Input name="email">Email</Input>
        <Select
          name="type"
          label="Type"
          options={contactTypeOptions}
          defaultMessage="-- Choose type --"
        />
        <Button type="submit">Save contact</Button>
        <Button onClick={() => methods.reset()} variant="secondary">
          Clean
        </Button>
      </form>
    </FormProvider>
  );
}

export default ContactForm;
