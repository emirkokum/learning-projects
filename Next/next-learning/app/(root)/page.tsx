import Hello from "../../components/hello";

const page = () => {
    console.log("what the fuck");
    
    return(
        <main>
            <div className="text-2xl underline">Welcome to Next.js</div>
            <Hello />
        </main>
    )
};

export default page;
