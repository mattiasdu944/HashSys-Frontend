import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';

export const ProductReportCard = () => {
    return (
        <div>
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <Card className='shadow-md bg-gradient max-w-xs w-full p-4' isPressable>
                    <CardHeader className='p-0'>
                        <h3>Total del productos </h3>
                    </CardHeader>
                    <CardBody className="p-0 overflow-visible">
                        <h3 className=' text-white text-[2rem] md:text-[3rem] font-bold'>
                            201
                        </h3>
                        <p className='text-white text-base font-light block'>Unidades totales</p>
                    </CardBody>
                </Card>
                
                <Card className='shadow-md bg-gradient-rose max-w-xs w-full p-4' isPressable>
                    <CardHeader className='p-0'>
                        <h3>Nuevos productos</h3>
                    </CardHeader>
                    <CardBody className="p-0 overflow-visible">
                        <h3 className=' text-white text-[2rem] md:text-[3rem] font-bold'>
                            5
                        </h3>
                        <p className='text-white text-base font-light block'>
                            Agregados hoy
                        </p>
                    </CardBody>
                </Card>
                
                <Card className='shadow-md bg-gradient-orange max-w-xs w-full p-4' isPressable>
                    <CardHeader className='p-0'>
                        <h3>Productos en oferta</h3>
                    </CardHeader>
                    <CardBody className="p-0 overflow-visible">
                        <h3 className=' text-white text-[2rem] md:text-[3rem] font-bold'>
                            14
                        </h3>
                        <p className='text-white text-base font-light block'>
                            Ofertas disponibles
                        </p>
                    </CardBody>
                </Card>

            </div>
        </div>
    )
}
