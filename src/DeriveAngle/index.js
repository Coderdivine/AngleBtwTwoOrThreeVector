class DeriveAngle{

    constructor(data){
        const {x1,y1,z1,x2,y2,z2} = data;
        this.x1 = x1; this.x2 = x2;
        this.y1 = y1; this.y2 = y2;
        this.z1 = z1; this.z2 = z2;
        this.getAngle();

    }

    async getAngle(){
        const dotProduct = await this.dotProduct();
        const { one, two } = await this.magnitude();
        const x = dotProduct/(one * two);
        const tetha = Math.acos(x) * 180 / Math.PI;
        console.log({x,tetha})
        return tetha;
    }

    async dotProduct(){
        const dot = this.z1?(this.x1*this.x2)+(this.y1*this.y2)+(this.z1*this.z2):(this.x1*this.x2)+(this.y1*this.y2);
        console.log({dot});
        return dot;
    }
    
    async magnitude(){

        const magOne = this.z2 || this.z1 ?(Math.sqrt((this.x1^2)+(this.y1^2)+(this.z1^2))):(Math.sqrt((this.x1)+(this.y1^2)));
        const magTwo = this.z2 || this.z1 ?(Math.sqrt((this.x2^2)+(this.y2^2)+(this.z2^2))):(Math.sqrt((this.x2)+(this.y2^2)));
        console.log({magOne,magTwo});
        return {
            one:magOne,
            two:magTwo
        };
    }
}

module.exports = DeriveAngle;