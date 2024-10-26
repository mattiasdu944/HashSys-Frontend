'use client'
import { useState } from "react";
import { createCategory } from "..";


import { toast } from "sonner";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea } from "@nextui-org/react";
import { Add01Icon } from "hugeicons-react";



export const NewCategoryModal = () => {

    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState({
        message: '',
        isError: false
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        setIsLoading(true);
        setHasError({
            isError: false,
            message: '',
        })

        const { categoryName, description, image } = e.target as HTMLFormElement;


        if (categoryName.value.trim() === '' || description.value.trim() === '') {
            setHasError({
                isError: true,
                message: 'Todos los campos deben ser llenados'
            });
            setIsLoading(false);

            return;
        };

        if (image.files.length == 0) {
            setHasError({
                isError: true,
                message: 'Debe agregar una imagen'
            });

            setIsLoading(false);

            return;
        }

        const formData = new FormData();

        formData.append('name', categoryName.value);
        formData.append('description', description.value);
        formData.append('image', image.files[0]);

        const { isError, message } = await createCategory(formData);

        if (isError) {
            toast.error('Ocurrio un error', {
                description: message,
            });

            setIsLoading(false);

            return;
        }

        onClose();

        toast.success('Categoria create', {
            description: 'Se creo la categoria ' + categoryName.value
        });

        setHasError({
            isError: false,
            message: '',
        });

        setIsLoading(false);

    }

    return (
        <>
            <Button color="primary" className="bg-gradient" startContent={<Add01Icon />} onPress={onOpen}>Crea una categoria</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <ModalHeader className="flex flex-col gap-1">Agregar categoria</ModalHeader>
                            <ModalBody>

                                {
                                    hasError.isError && (
                                        <p className="text-red-500">{hasError.message}</p>
                                    )
                                }

                                <div className='relative'>
                                    <input
                                        type="file"
                                        name='image'
                                        accept='image/png, image/jpg, image/jpeg, image/webp,'
                                        className='file:bg-transparent file:text-primary file:cursor-pointer file:border-none file:p-2 rounded'
                                    />
                                </div>
                                <Input
                                    name="categoryName"
                                    isRequired
                                    label="Nombre de la categoria"
                                />
                                <Textarea
                                    name="description"
                                    isRequired
                                    label="Descripción"
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cerrar
                                </Button>
                                <Button isLoading={isLoading} isDisabled={isLoading} className="btn-primary" type="submit">
                                    Guardar
                                </Button>

                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}