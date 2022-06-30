export default function Flex() {
    return (
        <>
            <div id="flex-container">
                <p className="box">
                    Say you want to put a few things in a row, like a couple of
                    boxes of text.
                </p>
                <p className="box">
                    We can wrap them in a div, and then apply the property display:
                    flex to that div.
                </p>
                <p className="box">
                    Now, all of a sudden, those boxes are in a row!
                </p>
            </div>
        </>
    );
}
