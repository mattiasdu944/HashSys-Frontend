'use client'
import { useState } from "react";
import { ICategory, updateCategory } from "..";

import { toast } from "sonner";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Textarea, Input } from "@nextui-org/react";
import { PencilIcon } from "hugeicons-react";


interface Props {
    category: ICategory;
}

export const EditCategoryModal = ({ category }: Props) => {

    const [isLoading, setIsLoading] = useState(false);
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        setIsLoading(true);

        const { categoryName, description, image } = e.target as HTMLFormElement;


        if (categoryName.value.trim() === '' || description.value.trim() === '') {
            toast.error('Datos incorrectos', {
                description: "Debe llenar todos los campos",
            });

            setIsLoading(false);

            return;
        };

        const formData = new FormData();

        formData.append('id', `${category.id}`);
        formData.append('name', categoryName.value);
        formData.append('description', description.value);
        formData.append('image', image.files[0]);

        const { isError, message } = await updateCategory(formData);
        
        if (isError) {
            toast.error('Ocurrio un error', {
                description: message,
            });

            setIsLoading(false);

            return;
        }

        onClose();

        toast.success('Categoria actualizada', {
            description: 'Se actualizo la categoria ' + categoryName.value
        });

        setIsLoading(false);
    }


    return (
        <>
            <Button onPress={onOpen} isIconOnly variant='light' radius='full' color='primary' startContent={<PencilIcon size={18} />} />

            <Modal placement='center' isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <ModalHeader className="flex flex-col gap-1">Editar categoria {category.name}</ModalHeader>
                            <ModalBody>

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
                                    defaultValue={category.name}
                                    label="Nombre de la categoria"
                                />
                                <Textarea
                                    defaultValue={category.description}
                                    name="description"
                                    isRequired
                                    label="Descripción"
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cerrar
                                </Button>
                                <Button isLoading={ isLoading } isDisabled={ isLoading } className="btn-primary" type="submit">
                                    Actualizar
                                </Button>

                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
