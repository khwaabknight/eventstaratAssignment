import Button from './common/Button';

function CTA() {
    return (
        <section className="relative bg-white overflow-hidden font-ruberoid">
            <div className="mx-auto px-4 pt-20 text-center">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-2xl lg:text-4xl lg:text-[4rem] font-extrabold leading-tight text-primary capitalize">
                        Everything Connected.
                        <br />
                        powered by aI.
                    </h1>
                    <p className="mt-6 text-black text-sm sm:text-base mx-auto max-w-4xl px-5">
                        Test is designed around the full event lifecycle — from
                        pre-event workflows to post-event insights — and at the
                        heart of it all is AI. From automating communication to
                        predicting engagement and surfacing key actions, every
                        module is enhanced by intelligent systems that do the
                        heavy lifting.
                    </p>
                </div>
                <div className="mt-8">
                    <Button />
                </div>
            </div>
        </section>
    );
}

export default CTA;
