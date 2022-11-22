import React from "react";

function JavaOperators() {
    return (
        <>
            <div>


                <table>
                    <tbody><tr><th>Operator Type</th><th>Category</th><th>Precedence</th></tr>
                        <tr>
                            <td rowspan="2">Unary</td><td>postfix</td><td><em>expr</em>++ <em>expr</em>--</td>
                        </tr>
                        <tr>
                            <td>prefix</td><td>++<em>expr</em> --<em>expr</em> +<em>expr</em> -<em>expr</em> ~ !</td>
                        </tr>
                        <tr>
                            <td rowspan="2">Arithmetic</td><td>multiplicative</td><td>* / %</td>
                        </tr>
                        <tr>
                            <td>additive</td><td>+ -</td>
                        </tr>
                        <tr>
                            <td>Shift</td><td>shift</td><td>&lt;&lt; &gt;&gt; &gt;&gt;&gt;</td>
                        </tr>
                        <tr>
                            <td rowspan="2">Relational</td><td>comparison</td><td>&lt; &gt; &lt;= &gt;= instanceof</td>
                        </tr>
                        <tr>
                            <td>equality</td><td>== !=</td>
                        </tr>
                        <tr>
                            <td rowspan="3">Bitwise</td><td>bitwise AND</td><td>&amp;</td>
                        </tr>
                        <tr>
                            <td>bitwise exclusive OR</td><td>^</td>
                        </tr>
                        <tr>
                            <td>bitwise inclusive OR</td><td>|</td>
                        </tr>
                        <tr>
                            <td rowspan="2">Logical</td><td>logical AND</td><td>&amp;&amp;</td>
                        </tr>
                        <tr>
                            <td>logical OR</td><td>||</td>
                        </tr>
                        <tr>
                            <td>Ternary</td><td>ternary</td><td>? :</td>
                        </tr>
                        <tr>
                            <td>Assignment</td><td>assignment</td><td>= += -= *= /= %= &amp;= ^= |= &lt;&lt;= &gt;&gt;= &gt;&gt;&gt;=</td>
                        </tr>
                    </tbody></table>
            </div>
        </>
    )
}

export default JavaOperators;