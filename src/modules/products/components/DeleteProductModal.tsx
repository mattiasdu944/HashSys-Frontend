'use client'

import { useState } from "react";
import { toast } from "sonner";

import { deleteProduct } from "..";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { Delete01Icon } from "hugeicons-react";

interface Props {
    productName: string;
    productId: string;
}


export const DeleteProductModal = ({ productName, productId }: Props) => {
    
    const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();

    const [isLoading, setIsLoading] = useState(false);

    const handleDeleteProduct = async () => {
    
        setIsLoading(true);
        
        const { isError, message } = await deleteProduct( productId );

        if( isError ){
            toast.error('Ocurrio un error', {
                description: message,
            });

            setIsLoading(false);

            return;
        }

        
        toast.success('Producto eliminado', {
            description: message
        });

        setIsLoading(false);
        
        onClose();
        
    }   

    return (
        <>
            <Button onPress={ onOpen } variant='light' color='danger' isIconOnly startContent={ <Delete01Icon size={ 18 }/> } />

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
                                <p>
                                    ¿Estas seguro de <span className="text-red-500 font-semibold">eliminar</span> el producto <span className="font-bold">{ productName }</span>?
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancelar
                                </Button>
                                <Button isLoading={ isLoading } isDisabled={ isLoading } onPress={handleDeleteProduct} className="btn-primary" color="primary">
                                    Eliminar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
