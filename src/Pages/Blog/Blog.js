import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto mb-5'>
            <div className=''>
                <h4 className='mt-4 text-2xl font-bold text-center text-primary'>Blogs
                </h4>
                <article>
                    <h4 className='mt-4 text-xl text-primary'>How will you improve the performance of a React Application?
                    </h4>
                    <p>(a) Usage of Pure components
                        React. (b) memo for component memorization.
                        (c) The shouldComponentUpdate Life Cycle Event.
                        (d) Binding vs. Arrow Functions in Constructors.
                        (e) Refrain from using Inline style attribute
                        (f) Avoid extra tags by using React fragments</p>
                </article>
            </div>
            <div className=''>
                <article>
                    <h4 className='mt-4 text-xl text-primary'>What are the different ways to manage a state in a React application?
                    </h4>
                    <li><strong>Local (UI) state:</strong> Local state is data we manage in one or another component.</li>
                    <li><strong>Global (UI) state:</strong> Global state is data we manage across multiple components.</li>
                    <li><strong>Server state :</strong> Data that comes from an external server that must be integrated with our UI state. </li>
                    <li><strong>URL state:</strong>Data that exists on our URLs, including the pathname and query parameters.</li>
                </article>
            </div>
            <div className=''>
                <article>
                    <h4 className='mt-4 text-xl text-primary'>How does prototypical inheritance work?
                    </h4>
                    <p>prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
                </article>
            </div>
            <div className=''>
                <article>
                    <h4 className='mt-4 text-xl text-primary'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                    </h4>
                    <p>If you update it directly, calling the setState() afterward may just replace the update you made.
                        When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                        You will lose control of the state across all components.</p>
                </article>
            </div>
            <div className=''>
                <article>
                    <h4 className='mt-4 text-xl text-primary'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                    </h4>
                
                </article>
            </div>
            <div className=''>
                <article>
                    <h4 className='mt-4 text-xl text-primary'>What is a unit test? Why should write unit tests?
                    </h4>
                    <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.  test.One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process</p>
                </article>
            </div>
        </div>
    );
};

export default Blogs;