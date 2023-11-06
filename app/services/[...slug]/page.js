function Page({ params }) {
    console.log(params);
    return (
        <div>
            <h1>Service Details Page {params.slug}</h1>
        </div>
    );
}

export default Page;
