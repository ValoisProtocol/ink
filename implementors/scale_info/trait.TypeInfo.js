(function() {var implementors = {};
implementors["ink_env"] = [{"text":"impl TypeInfo for DefaultEnvironment","synthetic":false,"types":[]},{"text":"impl TypeInfo for AccountId","synthetic":false,"types":[]},{"text":"impl TypeInfo for Hash","synthetic":false,"types":[]}];
implementors["ink_primitives"] = [{"text":"impl TypeInfo for Key","synthetic":false,"types":[]}];
implementors["ink_storage"] = [{"text":"impl TypeInfo for DynamicAllocation","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; TypeInfo for StorageBox&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: SpreadLayout + 'static,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl TypeInfo for VacantEntry","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; TypeInfo for Entry&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: TypeInfo + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: TypeInfo + 'static,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["scale_info"] = [];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()