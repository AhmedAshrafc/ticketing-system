import DynamicTitle from "@/components/DynamicTitle";

import { useState } from "react";

import { useForm } from "react-hook-form";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState("center");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // const footerContent = (
  //   <div>
  //     <Button
  //       label="Cancel"
  //       icon="pi pi-times"
  //       onClick={() => setVisible(false)}
  //       className="p-button-text"
  //     />
  //     <Button
  //       label="Create"
  //       icon="pi pi-check"
  //       onClick={() => setVisible(false)}
  //       autoFocus
  //     />
  //   </div>
  // );

  const show = (position) => {
    setPosition(position);
    setVisible(true);
  };

  const products = [
    {
      name: "Project 1",
      description: "This is a description",
      assignee: 2,
    },
    {
      name: "Project 2",
      description: "This is a description",
      assignee: 2,
    },
    {
      name: "Project 3",
      description: "This is a description",
      assignee: 2,
    },
  ];

  return (
    <>
      <DynamicTitle />
      <h1 className="text-4xl font-bold text-center">Projects</h1>

      <div className="flex justify-end">
        <Button
          label="Create new project"
          icon="pi pi-arrow-up"
          onClick={() => show("bottom")}
          className="p-button-success"
          style={{ minWidth: "10rem" }}
        />

        <Dialog
          header="Fill in the blanks to create a new project"
          visible={visible}
          position={position}
          style={{ width: "50vw" }}
          onHide={() => setVisible(false)}
          // footer={footerContent}
          draggable={false}
          resizable={false}
        >
          <div className="flex flex-col gap-4">
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                {...register("description", { required: true })}
              />
              {errors.description && <span>This field is required</span>}
              <label htmlFor="assignee">Assignee</label>
              <input
                type="number"
                id="assignee"
                name="assignee"
                {...register("assignee", { required: true })}
              />
              {errors.assignee && <span>This field is required</span>}
              <div className="flex justify-end">
                <Button
                  label="Cancel"
                  icon="pi pi-times"
                  onClick={() => setVisible(false)}
                  className="p-button-text"
                />
                <Button
                  label="Create"
                  icon="pi pi-check"
                  onClick={() => setVisible(false)}
                  autoFocus
                />
              </div>
            </form>
          </div>
        </Dialog>
      </div>

      <div className="">
        <DataTable
          value={products}
          tableStyle={{ minWidth: "50rem" }}
          className="mt-4 mb-8 md:mb-10 overflow-auto"
        >
          <Column
            field="name"
            header="Name"
            className="w-[20%]"
            pt={{
              headerTitle: { className: "!text-center w-full" },
              root: { className: "!text-center" },
            }}
          ></Column>
          <Column
            field="description"
            header="Description"
            className="w-[60%]"
            pt={{
              headerTitle: { className: "text-center w-full" },
              root: { className: "!text-center" },
            }}
          ></Column>
          <Column
            field="assignee"
            header="Number of assignee"
            className="w-[20%]"
            pt={{
              headerTitle: { className: "text-center w-full" },
              root: { className: "!text-center" },
            }}
          ></Column>
        </DataTable>
      </div>
    </>
  );
}
