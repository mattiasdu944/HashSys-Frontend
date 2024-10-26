'use client'
import { useState } from "react";

import { toast } from "sonner";

import { deleteCategory } from '..';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { Delete01Icon } from "hugeicons-react";

interface Props {
    categoryName: string;
    categoryId: number;
}

export const DeleteCategoryModal = ({ categoryName, categoryId }: Props) => {

    const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {

        setIsLoading(true);

        const response = await deleteCategory(categoryId);

        if (response.isError) {

            toast.error('Error', {
                description: response.message,
            })

            return;
        }

        toast.success('Categoria eliminada', {
            description: 'Se elimino la categoria ' + categoryName,
        })

        setIsLoading(false);
        onClose();
    }


    return (
        <>
            <Button onPress={onOpen} isIconOnly variant='light' radius='full' color='danger' startContent={<Delete01Icon size={18} />} />

            <Modal placement='center' isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <ModalHeader className="flex flex-col gap-1">Eliminar categoria</ModalHeader>
                            <ModalBody>
                                <p>
                                    ¿Esta seguro de eliminar la categoria <span className="font-semibold">{categoryName}</span>? <br />
                                    Se <span className="text-red-500">eliminaran</span> todos los productos de la categoria.
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cerrar
                                </Button>
                                <Button isLoading={isLoading} disabled={isLoading} className="btn-primary" onPress={handleSubmit}>
                                    Eliminar
                                </Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
