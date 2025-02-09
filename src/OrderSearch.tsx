import {Button, Form, Table } from "react-bootstrap";
import {EmporixOrder} from "./emporix.model.ts";
import {EmporixContext} from "./EmporixProvider.tsx";
import { useContext, useState } from "react";

export const OrderSearch = () => {
    const context = useContext(EmporixContext);

    const [orders, setOrders] = useState<EmporixOrder[]>([]);

    async function searchOrder(formData: FormData): Promise<void> {
        const customerEmail = formData.get('customerEmail')

        const response = await fetch(`https://api.emporix.io/order-v2/${context.state?.tenant}/salesorders?q=customer.email:${customerEmail}`, {
            method: 'GET',
            headers: new Headers({
                'Authorization': `Bearer ${context.state?.accessToken}`,
                'Emporix-Tenant': context.state?.tenant || '',
            }),
        })
            .then(res => res.json());

        setOrders(response);
    }

    return (
        <>
            <Form action={searchOrder as unknown as string}>
                <Form.Group className="mb-3" controlId="orderSearch">
                    <Form.Label>Customer Email</Form.Label>
                    <Form.Control type="text" name="customerEmail" placeholder="Customer Email" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>
            {orders && (
                <>
                    <Table striped bordered hover className="mt-2">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Customer</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.customer.email}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </>
            )}
        </>
    );
};
