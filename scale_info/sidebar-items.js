initSidebarItems({"derive":[["TypeInfo",""]],"enum":[["PathError","An error that may be encountered upon constructing namespaces."],["TypeDef","The possible types a SCALE encodable Rust value could have."],["TypeDefPrimitive","A primitive Rust type."]],"fn":[["meta_type","Returns the runtime bridge to the types compile-time type information."]],"macro":[["tuple_meta_type","Takes a number of types and returns a vector that contains their respective `MetaType` instances."]],"mod":[["build","Builders for defining metadata for variant types (enums), and composite types (structs). They are designed to allow only construction of valid definitions."],["form","Provides form definitions."],["interner","Interning data structure and associated symbol definitions."],["prelude","Exports from `std`, `core` and `alloc` crates."]],"struct":[["Field","A field of a struct-like data type."],["MetaType","A metatype abstraction."],["Path","Represents the path of a type definition."],["PortableRegistry","A read-only registry containing types in their portable form for serialization."],["Registry","The registry for space-efficient storage of type identifiers and definitions."],["Type","A [`Type`] definition with optional metadata."],["TypeDefArray","An array type."],["TypeDefComposite","A composite type, consisting of either named (struct) or unnamed (tuple struct) fields"],["TypeDefPhantom","A type describing a `PhantomData<T>` type."],["TypeDefSequence","A type to refer to a sequence of elements of the same type."],["TypeDefTuple","A type to refer to tuple types."],["TypeDefVariant","A Enum type (consisting of variants)."],["Variant","A struct enum variant with either named (struct) or unnamed (tuple struct) fields."]],"trait":[["IntoPortable","Convert the type definition into the portable form using a registry."],["TypeInfo","Implementors return their meta type information."]]});