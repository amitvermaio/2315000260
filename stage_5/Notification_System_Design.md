# Stage 5
- that implementation doing it one-by-one.
- the implementation is tightly coupled.
- for that i would create a seprate notification service and in that i would do batch processing
and connect this service with the other service with the help of Message Queue(RabbitMQ/Kafka)

- for failure i will add a retry mechanism with `MAX_RETRIES=5` and if then also failed then send email to `admin`.