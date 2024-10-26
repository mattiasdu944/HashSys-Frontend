import Image from "next/image";
import NotImage from "@/assets/images/not-image.jpg";

import { ICategory } from "..";
import { formatDate } from "@/utils";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { EyeIcon } from "hugeicons-react";

interface Props {
    category: ICategory;
}

export const ModalCategory = ({ category }: Props) => {

    const { isOpen, onOpenChange, onOpen } = useDisclosure();

    return (
        <>
            <Button onPress={ onOpen } isIconOnly variant='light' radius='full' color='primary' startContent={<EyeIcon size={18} />} />

            <Modal placement='center' isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <div>
                            <ModalHeader className="flex flex-col gap-1">{category.name}</ModalHeader>
                            <ModalBody>
                                <Image
                                    width="150"
                                    height="150"
                                    alt={category.name}
                                    className="max-w-[350px] mx-auto w-full object-cover"
                                    src={category.image ? category.image! : NotImage}
                                />
                                <p className='font-bold text-black'>Descripcion: <span className='font-normal text-gray-500'>{category.description}</span></p>
                                <p className='font-bold text-black'>
                                    Fecha de creacion: <span className='font-normal text-gray-500'>{formatDate(category.createdAt)}</span>
                                </p>
                                <p className='font-bold text-black'>
                                    Ultima actualización: <span className='font-normal text-gray-500'>{formatDate(category.updatedAt)}</span>
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cerrar
                                </Button>

                                <Button variant='light' color="primary" onPress={onClose}>
                                    Ver productos
                                </Button>
                            </ModalFooter>
                        </div>
                    )}
                </ModalContent>
            </Modal>
        </>

    )
}
