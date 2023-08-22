import DynamicTitle from "@/components/DynamicTitle";

import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoSearchOutline } from "react-icons/io5";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [phrase, setPhrase] = useState("");

  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  // search projects
  const filterProjects = (e) => {
    setPhrase(e.target.value);
    const filteredProjects = projects.filter(
      (project) =>
        project.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        project.description
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        project.assignee.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setProjects(filteredProjects);
  };

  const handleCreate = (data) => {
    setProjects([...projects, data]);
    setShowCreateModal(false);
    reset();
    toast.success("Project created successfully!");
  };

  const handleEdit = (data) => {
    const updatedProjects = projects.map((project) =>
      project === selectedProject ? { ...project, ...data } : project
    );
    setProjects(updatedProjects);
    setShowEditModal(false);
    setSelectedProject(null);
    toast.success("Project updated successfully!");
  };

  const handleDelete = () => {
    const updatedProjects = projects.filter(
      (project) => project !== selectedProject
    );
    setProjects(updatedProjects);
    setShowDeleteModal(false);
    setSelectedProject(null);
    toast.error("Project deleted successfully!");
  };

  const openCreateModal = () => {
    setShowCreateModal(true);
  };

  const openEditModal = (project) => {
    setSelectedProject(project);
    setShowEditModal(true);
  };

  const openDeleteModal = (project) => {
    setSelectedProject(project);
    setShowDeleteModal(true);
  };

  const renderActions = (rowData) => {
    return (
      <div className="flex justify-center items-center gap-4">
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success"
          onClick={() => openEditModal(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger"
          onClick={() => openDeleteModal(rowData)}
        />
      </div>
    );
  };

  const renderCreateModal = () => {
    return (
      <Dialog
        header="Create a project"
        draggable={false}
        visible={showCreateModal}
        onHide={() => setShowCreateModal(false)}
        className="w-[90%] md:w-[50%] "
      >
        <form onSubmit={handleSubmit(handleCreate)}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="p-inputtext p-component p-filled !bg-gray-100 dark:!bg-gray-300"
                {...register("name", {
                  required: {
                    value: true,
                    message: "This field is required!",
                  },
                  minLength: {
                    value: 3,
                    message: "Name should be at least 3 characters!",
                  },
                  maxLength: {
                    value: 20,
                    message: "Name should be at most 20 characters!",
                  },
                })}
              />
              {errors.name && (
                <small className="p-error">{errors.name.message}</small>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                className="p-inputtext p-component p-filled !bg-gray-100 dark:!bg-gray-300"
                {...register("description", {
                  required: {
                    value: true,
                    message: "This field is required!",
                  },
                  minLength: {
                    value: 3,
                    message: "Description should be at least 3 characters!",
                  },
                  maxLength: {
                    value: 200,
                    message: "Description should be at most 200 characters!",
                  },
                })}
              />
              {errors.description && (
                <small className="p-error">{errors.description.message}</small>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="assignee">Assignee</label>
              <input
                type="text"
                id="assignee"
                className="p-inputtext p-component p-filled !bg-gray-100 dark:!bg-gray-300"
                {...register("assignee", {
                  required: {
                    value: true,
                    message: "This field is required!",
                  },
                  minLength: {
                    value: 3,
                    message: "Assignee should be at least 3 characters!",
                  },
                  maxLength: {
                    value: 20,
                    message: "Assignee should be at most 20 characters!",
                  },
                })}
              />
              {errors.assignee && (
                <small className="p-error">{errors.assignee.message}</small>
              )}
            </div>
            <div className="flex justify-end gap-2">
              <Button
                label="Reset"
                type="reset"
                className="p-button-secondary"
              />
              <Button
                label="Cancel"
                type="reset"
                onClick={() => setShowCreateModal(false)}
                className="p-button-secondary"
              />
              <Button
                type="submit"
                label="Create"
                icon="pi pi-check"
                severity="success"
              />
            </div>
          </div>
        </form>
      </Dialog>
    );
  };

  const renderEditModal = () => {
    return (
      <Dialog
        header="Edit Project"
        draggable={false}
        visible={showEditModal}
        onHide={() => setShowEditModal(false)}
        className="w-[90%] md:w-[50%]"
      >
        <form onSubmit={handleSubmit(handleEdit)}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                defaultValue={selectedProject?.name}
                className="p-inputtext p-component p-filled !bg-gray-100 dark:!bg-gray-300"
                {...register("name", {
                  required: {
                    value: false,
                  },
                  minLength: {
                    value: 3,
                    message: "Name should be at least 3 characters!",
                  },
                  maxLength: {
                    value: 20,
                    message: "Name should be at most 20 characters!",
                  },
                })}
              />
              {errors.name && (
                <small className="p-error">{errors.name.message}</small>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                defaultValue={selectedProject?.description}
                className="p-inputtext p-component p-filled !bg-gray-100 dark:!bg-gray-300"
                {...register("description", {
                  required: {
                    value: false,
                  },
                  minLength: {
                    value: 3,
                    message: "Description should be at least 3 characters!",
                  },
                  maxLength: {
                    value: 200,
                    message: "Description should be at most 200 characters!",
                  },
                })}
              />
              {errors.description && (
                <small className="p-error">{errors.description.message}</small>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="assignee">Assignee</label>
              <input
                type="text"
                id="assignee"
                defaultValue={selectedProject?.assignee}
                className="p-inputtext p-component p-filled !bg-gray-100 dark:!bg-gray-300"
                {...register("assignee", {
                  required: {
                    value: false,
                  },
                  minLength: {
                    value: 3,
                    message: "Assignee should be at least 3 characters!",
                  },
                  maxLength: {
                    value: 20,
                    message: "Assignee should be at most 20 characters!",
                  },
                })}
              />
              {errors.assignee && (
                <small className="p-error">{errors.assignee.message}</small>
              )}
            </div>
            <div className="flex justify-end gap-2">
              <Button
                label="Cancel"
                type="reset"
                onClick={() => setShowEditModal(false)}
                className="p-button-secondary"
              />
              <Button
                type="submit"
                label="Save"
                icon="pi pi-check"
                severity="success"
              />
            </div>
          </div>
        </form>
      </Dialog>
    );
  };

  const renderDeleteModal = () => {
    return (
      <Dialog
        header="Warning"
        draggable={false}
        visible={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        className="w-[90%] md:w-[50%]"
      >
        <div className="flex flex-col gap-4">
          <p className="font-bold">
            Are you sure you want to delete this project?
          </p>
          <div className="flex justify-end gap-2">
            <Button
              label="Yes"
              className="p-button-danger"
              onClick={handleDelete}
            />
            <Button
              label="No"
              className="p-button-secondary"
              onClick={() => setShowDeleteModal(false)}
            />
          </div>
        </div>
      </Dialog>
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <DynamicTitle />
      <h1 className="font-semibold uppercase md:text-2xl text-center dark:text-white duration-300">
        Projects
      </h1>

      <div className="md:flex md:justify-center">
        <div className="relative w-full md:w-[60%] ">
          <IoSearchOutline className="text-gray-500 top-3 left-4 absolute md:top-1/2 md:left-4 md:transform md:-translate-y-1/2 lg:text-lg" />
          <input
            type="text"
            className="bg-white dark:bg-gray-200 block w-11/12 peer focus:w-full border-none caret-primary-color outline-none duration-300 py-2 px-8 lg:px-10 lg:text-lg rounded-full pl-10 "
            placeholder="Search..."
            value={phrase}
            onChange={filterProjects}
          />

          <button className="bg-gray-200 block rounded-full w-[120px] lg:w-[15%] h-[40px] mx-auto mt-4 duration-300 md:m-0 md:absolute md:left-[80%] md:peer-focus:left-[90%] md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:text-gray-500 md:bg-transparent md:border-none md:outline-none lg:text-lg hover:bg-gray-200 active:bg-gray-300">
            Search
          </button>

          <div className="md:bg-gray-300 md:duration-300 md:absolute md:peer-focus:left-[80%] md:left-[70%] md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:w-0.5 md:h-4 lg:h-6"></div>
        </div>
      </div>
      <Button
        label="Create new project"
        icon="pi pi-plus"
        onClick={openCreateModal}
        className="self-center md:self-end"
      />
      {projects.length > 0 ? (
        <DataTable value={projects}>
          <Column field="name" header="Name" className="w-[20%] !text-center" />
          <Column
            field="description"
            header="Description"
            className="max-w-[600px] !text-center !whitespace-normal !break-words"
          />
          <Column
            field="assignee"
            header="Assignee"
            className="w-[20%] !text-center"
          />
          <Column
            field="actions"
            header="Actions"
            body={renderActions}
            className="w-[20%] !text-center"
          />
        </DataTable>
      ) : (
        <div className="flex justify-center items-center gap-4">
          <h1 className="font-semibold uppercase md:text-2xl text-center dark:text-white duration-300">
            No projects found
          </h1>
        </div>
      )}

      {renderCreateModal()}
      {renderEditModal()}
      {renderDeleteModal()}
      <ToastContainer />
    </div>
  );
}
