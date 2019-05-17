const posts = [
    {
        token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTg1NTQ4MzIsImRhdGEiOnsiZGlzcGxheU5hbWUiOiJqMG5ueSJ9LCJpYXQiOjE1NTczNDUyMzJ9.0R_LqnarZLxQ32qp-oIV95tq543g6IqHP-DAw7Vr5h0",
        description: "There's some vandalism at Snow Hill Station",
        longitude: "-1.897511",
        latitude: "52.482577",
        postCategory: "crime"
    },
    {
        token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTkxNTcyNDEsImRhdGEiOnsiZGlzcGxheU5hbWUiOiJENHZvIn0sImlhdCI6MTU1Nzk0NzY0MX0.QUvsb5yxSqJzZxaEU2J7RSgOXTV8CsZ7m8960oXz9FY",
        description:
            "The railings at Calthorpe Park and damage and my children might hurt themselves",
        longitude: "-1.899936",
        latitude: "52.459154",
        postCategory: "crime"
    },
    {
        token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTkxNTczODUsImRhdGEiOnsiZGlzcGxheU5hbWUiOiJqMG5ueSJ9LCJpYXQiOjE1NTc5NDc3ODV9.ouy3hkxAc-FeP3SFSzc7xVRfUbn9GCwFqnTIom660PU",
        description:
            "On a building site near Morrisons in Small Heath a colleague has cut his hand badly",
        longitude: "-1.861552",
        latitude: "52.473543",
        postCategory: "emergency"
    }
];

for (p in posts) {
    let http = require("http");

    let options = {
        method: "POST",
        hostname: "http://j0nn.io/function/watu-posts-add",
        headers: {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        }
    };

    let req = http.request(options, function(res) {
        let chunks = [];

        res.on("data", function(chunk) {
            chunks.push(chunk);
        });

        res.on("end", function() {
            let body = Buffer.concat(chunks);
            console.log(body.toString());
        });
    });

    req.write(
        JSON.stringify({
            p
        })
    );
    req.end();
}