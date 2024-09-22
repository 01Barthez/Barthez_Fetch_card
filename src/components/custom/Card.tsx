import { useContext } from "react"
import { DataContext } from "../../App";
import { Button } from "../ui/button";

interface IProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
     
}

const Card = () => {
    const products: IProduct[] = useContext(DataContext);

    return (
        <>
            {
                products.map((product) => {
                    return (
                        <div className="relative my-8 flex w-full max-w-xs flex-col overflow-hidden rounded-lg bg-white shadow">
                            <a className="relative py-4 border-b flex h-56 overflow-hidden rounded-xl shadow-inner shadow-primary-50" href="#">
                                <img 
                                    className="object-contain w-full h-full" 
                                    src={product.image} 
                                    alt={product.title} 
                                />
                            </a>

                            <div className="flex flex-col gap-2 p-3">
                                <a href="#">
                                    <h5 className="text-xl tracking-tight text-slate-900 font-medium text-center">
                                        {product.title}
                                    </h5>
                                </a>

                                <p className="text text-primary/50 truncate-text ">
                                    {product.description}
                                </p>

                                <div className="mt-2 mb-5 flex items-center justify-between">
                                    <p>
                                        <span className="text-3xl font-bold text-slate-900">
                                            ${product.price}
                                        </span>
                                        
                                        <span className="text-sm text-slate-900 line-through">
                                            ${ (product.price + (product.price / 10)).toFixed(2)}
                                        </span>
                                    </p>

                                    <div className="flex items-center">
                                        <div className="flex">
                                            {Array(Math.round(product.rating.rate)).fill(0).map(() => (
                                                <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                </svg>
                                            ))}
                                        </div>

                                        <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                                            {product.rating.rate}
                                        </span>
                                    </div>
                                </div>

                                <Button className="w-full flex items-center rounded-md bg-slate-900 py-6 text-center text-sm font-medium text-white hover:bg-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Add to cart
                                </Button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Card
