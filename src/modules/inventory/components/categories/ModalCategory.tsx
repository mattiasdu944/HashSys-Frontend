import Image from "next/image";
import { Category } from "../..";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { LuPen, LuTrash } from "react-icons/lu";
import NotImage from "@/assets/images/not-image.jpg";
import { formatDate } from "@/utils";

interface Props {
    isOpen: boolean;
    onOpenChange: () => void
    category: Category;
}

export const ModalCategory = ({ isOpen, onOpenChange, category }: Props) => {
    return (
        <Modal placement='center' isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <div>
                        <ModalHeader className="flex flex-col gap-1">{category.name}</ModalHeader>
                        <ModalBody>
                            <Image
                                width="200"
                                height="200"
                                alt={category.name}
                                className="w-full object-cover"
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
    )
}
