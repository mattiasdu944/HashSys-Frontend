'use client'
import { useState } from "react";

import { ICategory } from "..";

import { LuPen } from "react-icons/lu";
import { 
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Button, 
    useDisclosure, 
    Textarea, 
    Input 
} from "@nextui-org/react";


interface Props {
    category: ICategory;
}

export const EditCategoryModal = ({ category }: Props) => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [hasError, setHasError] = useState({
        message: '',
        isError: false
    });
    


    const handleSubmit = async () => {

    }


    return (
        <>
            <Button onPress={onOpen} isIconOnly variant='light' radius='full' color='primary' startContent={<LuPen size={18} />} />

            <Modal placement='center' isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <ModalHeader className="flex flex-col gap-1">Editar categoria { category.name }</ModalHeader>
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
                                    defaultValue={ category.name }
                                    label="Nombre de la categoria"
                                />
                                <Textarea
                                    defaultValue={ category.description }
                                    name="description"
                                    isRequired
                                    label="Descripción"
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cerrar
                                </Button>
                                <Button className="btn-primary" type="submit">
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
