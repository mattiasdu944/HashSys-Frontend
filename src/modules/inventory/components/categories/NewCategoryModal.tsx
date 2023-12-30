'use client'

import { FormEvent, useState } from "react";
import { LuPlus } from "react-icons/lu";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea } from "@nextui-org/react";
import { createCategory } from "../..";



export const NewCategoryModal = () => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const { categoryName, description } = e.target as HTMLFormElement;
        await createCategory(categoryName.value, description.value);
        setIsLoading(false);
        onClose();
    }

    return (
        <>
            <Button color="primary" className="bg-gradient" startContent={<LuPlus />} onPress={onOpen}>Crea una categoria</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form onSubmit={handleSubmit}>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
                                <Input
                                    type="file"
                                    labelPlacement="outside"
                                    label="Imagen"
                                    placeholder="Imagen"
                                />
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
                                <Button isLoading={ isLoading } isDisabled={ isLoading } className="bg-gradient" color="primary" type="submit">
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
