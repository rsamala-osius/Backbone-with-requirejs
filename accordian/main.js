$(function(){
	var Accordian=function(el,multiple){
		this.el=el || {};
		this.multiple=multiple || false;
		//links
		this.links=this.el.find('.link');

		//events
		this.links.on('click',{el:this.el,multiple:this.multiple},this.dropdown);

	}
	Accordian.prototype.dropdown=function(e){
		var $el=e.data.el,
		$this=$(this),
		$next=$this.next();
		$next.slideToggle();
		$this.parent().toggleClass('open');
		if(!this.multiple){
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		}

	}

	var accordian=new Accordian($('#accordian'));
});