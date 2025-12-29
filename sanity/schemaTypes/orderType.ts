import { defineArrayMember, defineField, defineType } from "sanity";
import { BasketIcon } from "@sanity/icons";

export const orderType = defineType({
    name: 'order',
    title: 'Order',
    type: 'document',
    icon: BasketIcon,
    fields: [
        defineField({
            name: 'orderNumber',
            type: 'string',
            title: 'Order Number',
            validation: (Rule) => Rule.required(),
        }),
        {
            name: 'invoice',
            type: 'object',
            fields: [
                { name: 'id', type: "string" },
                { name: "number", type: "string" },
                { name: "hosted_invoice_url", type: "url" },
            ]
        },
        defineField({
            name: 'stripeCheckoutSessionId',
            type: 'string',
            title: 'Stripe Checkout Session ID',
        }),
        defineField({
            name: 'stripeCustomerId',
            type: 'string',
            title: 'Stripe Customer ID',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'clerkUserId',
            type: 'string',
            title: 'Store User ID',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'customerName',
            type: 'string',
            title: 'Customer Name',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'email',
            type: 'string',
            title: 'Customer Email',
            validation: (Rule) => Rule.required().email(),
        }),
        defineField({
            name: 'stripePaymentIntentId',
            type: 'string',
            title: 'Stripe Payment Intent ID',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'products',
            title: 'Products',
            type: 'array',
            of: [
                defineArrayMember({
                    type: "object",
                    fields: [
                        defineField({
                            name: 'product',
                            title: 'Product Bought',
                            type: 'reference',
                            to: [{ type: 'product' }],
                        }),
                        defineField({
                            name: 'quantity',
                            title: 'Quantity Purchased',
                            type: 'number',
                        }),
                    ],
                    preview: {
                        select: {
                            product: 'product.name',
                            quantity: 'quantity',
                            image: 'product.image',
                            price: 'product.price',
                            currency: 'product.currency',
                        },
                        prepare(select) {
                            return {
                                title: `${select.product} x ${select.quantity}`,
                                subtitle: `${(select.price * select.quantity)}`,
                                media: select.image,
                            }
                        }
                    }
                })
            ]
        }),
        defineField({
            name: 'totalPrice',
            title: 'Total Price',
            type: 'number',
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: 'currency',
            title: 'Currency',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'amountDiscout',
            title: 'Amount Discount',
            type: 'number',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'address',
            title: 'Shipping Address',
            type: 'object',
            fields: [
                defineField({ name: 'state', type: 'string', title: 'State' }),
                defineField({ name: 'zip', type: 'string', title: 'Zip Code' }),
                defineField({ name: 'city', type: 'string', title: 'City' }),
                defineField({ name: 'address', type: 'string', title: 'Address' }),
                defineField({ name: 'name', type: 'string', title: 'Name' }),
            ],
        }),
        defineField({
            name: "status",
            title: "Order Status",
            type: "string",
            options:{
            list: [
                { title:"Pending", value:"pending" },
                {title:"Processing", value:"processing"},
                {title:"Paid", value:"paid"},
                {title:"Shipped",value:"shipped"},
                {title:"Out for Delivery", value:"out_for_delivery"},
                {title:"Delivered", value:"delivered"},
                {title:"Cancelled",value:"cancelled"},
            ]
        }
      }),
      defineField({
        name:"orderDate",
        title:"Ordered Date",
        type:"datetime",
        validation:(Rule)=>Rule.required(),
      }),
    ],
    preview:{
        select:{
            name:"customerName",
            amount:"totalPrice",
            currency:"currency",
            orderId:"orderNumber",
            email:"email",
        },
        prepare(select){
            const orderIdSnippet= `${select.orderId.slice(0,5)}...${select.orderId.slice(0,5)}`
            return {
                title: `${select.name} (${orderIdSnippet})`,
                subtitle:`${select.amount} ${select.currency}, ${select.email}`,
                media:BasketIcon
            }
        }
    }
});
