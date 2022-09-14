import console from 'console';
import { Context, APIGatewayProxyCallback, APIGatewayEvent } from 'aws-lambda';

export const eventHandler = (event: APIGatewayEvent, context: Context, callback: APIGatewayProxyCallback): void => {
    console.log(JSON.stringify({
        Event: JSON.stringify(event, null, 2),
        Context: JSON.stringify(context, null, 2)
    }));

    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello World!',
        }, null, 2),
    });
};

function sum (num1:number, num2:number){
    return num1 + num2;
}

console.log('Hello World!');
console.log(`Sum: ${sum(8,4)}`);
console.log(JSON.stringify({
    Sum: sum(8,4)
}));

